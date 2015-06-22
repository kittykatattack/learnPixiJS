#!/usr/bin/env perl
 
# Copyright (c) 2015 Sergey Lyubka
# All rights reserved
 
use Encode;
 
my $dir = "/Users/$ENV{USER}/.Trash";
 
sub read_file($) { local $/; open FD, $_[0] or die $_[0]; binmode FD; <FD>; }
sub u32($$) { unpack('N', substr($_[0], $_[1], 4)) }
sub str($$$) { my $s = substr($_[0], $_[1], $_[2]); Encode::from_to($s,'UCS-2BE','utf8'); $s; }
 
sub read_block($$) {
  my ($p, $o) = @_;
  my $cnt = u32($p, $o + 8);
  $o += 12;
  while ($cnt--) {
    my $name_len = u32($p, $o) * 2;
    my $name = str($p, $o + 4, $name_len);
    my $tag = substr($p, $o + 4 + $name_len, 4);
    my $type = substr($p, $o + 8 + $name_len, 4);
    print "[$o] [$name] [$name_len] [$tag] [$type]\n";
    $o += $name_len + 12;
    if ($type eq 'bool') { $o += 1 }
    elsif ($type =~ /shor|long|type/) { $o += 4; }
    elsif ($type =~ /comp|dutc/) { $o += 8; }
    elsif ($type eq 'ustr') {
      my $n = 2 * u32($p, $o);
      if ($tag eq 'ptbL') {
        my $original_location = str($p, $o + 4, $n);
        my $cmd0 = "mkdir -p \"/$original_location\"";
        my $cmd = "mv \"$dir/$name\" \"/$original_location\"";
        print "$cmd0\n";
        print "$cmd\n";
        system($cmd0);
        system($cmd);
      }
      $o += $n + 4;
    }
    elsif ($type eq 'blob') { $o += u32($p, $o) + 4; }
    else { last; }
  }
  return $cnt;
}
 
my $store = read_file("$dir/.DS_Store");
my $off = u32($store, 0x14) & ~15;
 
while (1) {
  last if read_block($store, $off) == 0;
  $off = ($off & 0xfffff000) + 0x1000;
};